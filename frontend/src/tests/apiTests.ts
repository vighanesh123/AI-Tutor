import { authService } from '../services/authService';

interface TestResult {
  test: string;
  status: 'PASS' | 'FAIL' | 'ERROR';
  message: string;
  duration: number;
}

class ApiTester {
  private results: TestResult[] = [];

  private async runTest(testName: string, testFunction: () => Promise<void>): Promise<void> {
    const startTime = Date.now();
    try {
      await testFunction();
      const duration = Date.now() - startTime;
      this.results.push({
        test: testName,
        status: 'PASS',
        message: 'Test passed successfully',
        duration
      });
      console.log(`✅ ${testName} - PASSED (${duration}ms)`);
    } catch (error: any) {
      const duration = Date.now() - startTime;
      this.results.push({
        test: testName,
        status: error.message.includes('Network Error') ? 'ERROR' : 'FAIL',
        message: error.message || 'Unknown error',
        duration
      });
      console.log(`❌ ${testName} - FAILED (${duration}ms): ${error.message}`);
    }
  }

  async testUserRegistration(): Promise<void> {
    await this.runTest('User Registration', async () => {
      const userData = {
        name: 'Test User',
        email: `test${Date.now()}@example.com`,
        password: 'password123'
      };

      const response = await authService.register(userData);
      
      if (!response.token) {
        throw new Error('No token returned');
      }
      if (!response.user) {
        throw new Error('No user data returned');
      }
      if (response.user.email !== userData.email) {
        throw new Error('User email mismatch');
      }
    });
  }

  async testUserLogin(): Promise<void> {
    await this.runTest('User Login', async () => {
      // First register a user
      const userData = {
        name: 'Login Test User',
        email: `logintest${Date.now()}@example.com`,
        password: 'password123'
      };

      await authService.register(userData);

      // Then try to login
      const loginData = {
        email: userData.email,
        password: userData.password
      };

      const response = await authService.login(loginData);
      
      if (!response.token) {
        throw new Error('No token returned');
      }
      if (response.user.email !== userData.email) {
        throw new Error('User email mismatch');
      }
    });
  }

  async testInvalidLogin(): Promise<void> {
    await this.runTest('Invalid Login', async () => {
      const loginData = {
        email: 'nonexistent@example.com',
        password: 'wrongpassword'
      };

      try {
        await authService.login(loginData);
        throw new Error('Login should have failed but succeeded');
      } catch (error: any) {
        if (!error.message.includes('Login failed') && !error.message.includes('Invalid')) {
          throw new Error('Unexpected error message: ' + error.message);
        }
        // Expected to fail, so this is a pass
      }
    });
  }

  async testTokenVerification(): Promise<void> {
    await this.runTest('Token Verification', async () => {
      // Set a fake token to test verification
      localStorage.setItem('token', 'fake-invalid-token');
      
      const isValid = await authService.verifyToken();
      
      if (isValid) {
        throw new Error('Invalid token was considered valid');
      }
      
      // Clean up
      localStorage.removeItem('token');
    });
  }

  async testLogout(): Promise<void> {
    await this.runTest('User Logout', async () => {
      // Set a token first
      localStorage.setItem('token', 'some-token');
      
      await authService.logout();
      
      const tokenAfterLogout = localStorage.getItem('token');
      if (tokenAfterLogout) {
        throw new Error('Token was not removed after logout');
      }
    });
  }

  async runAllTests(): Promise<TestResult[]> {
    console.log('🚀 Starting API Integration Tests...\n');
    
    await this.testUserRegistration();
    await this.testUserLogin();
    await this.testInvalidLogin();
    await this.testTokenVerification();
    await this.testLogout();

    console.log('\n📊 Test Results Summary:');
    console.log(`Total Tests: ${this.results.length}`);
    console.log(`Passed: ${this.results.filter(r => r.status === 'PASS').length}`);
    console.log(`Failed: ${this.results.filter(r => r.status === 'FAIL').length}`);
    console.log(`Errors: ${this.results.filter(r => r.status === 'ERROR').length}`);

    return this.results;
  }

  getResults(): TestResult[] {
    return this.results;
  }
}

// Export for use in browser console or testing
export const runApiTests = async (): Promise<TestResult[]> => {
  const tester = new ApiTester();
  return await tester.runAllTests();
};

// Auto-run tests if in development mode
if (process.env.NODE_ENV === 'development') {
  // Uncomment the following line to auto-run tests on module load
  // setTimeout(() => runApiTests(), 2000);
}

export default ApiTester;
