import React, { useState } from 'react';
import { Plus, Search, FileText, Edit, Trash2, Filter } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

interface Note {
  id: string;
  title: string;
  content: string;
  subject: string;
  tags: string[];
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
}

const NotesPage: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      title: 'Java OOP Concepts',
      content: 'Object-Oriented Programming principles:\n1. Encapsulation\n2. Inheritance\n3. Polymorphism\n4. Abstraction',
      subject: 'Java',
      tags: ['OOP', 'Programming', 'Fundamentals'],
      isPublic: true,
      createdAt: '2024-01-15T10:30:00Z',
      updatedAt: '2024-01-15T10:30:00Z'
    },
    {
      id: '2',
      title: 'Binary Search Algorithm',
      content: 'Binary search is an efficient algorithm for finding an item from a sorted list of items.',
      subject: 'Algorithms',
      tags: ['Algorithms', 'Searching', 'Time Complexity'],
      isPublic: false,
      createdAt: '2024-01-14T15:45:00Z',
      updatedAt: '2024-01-14T15:45:00Z'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  const subjects = ['All', 'Java', 'Python', 'Algorithms', 'Data Structures', 'Operating Systems', 'Networks'];

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSubject = selectedSubject === 'All' || note.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  const handleCreateNote = async () => {
    setEditingNote(null);
    setIsCreateModalOpen(true);
    
    // Track notes activity
    const { progressService } = await import('../services/progressService');
    await progressService.trackDailyActivity('notes', {
      action: 'create',
      timestamp: new Date().toISOString()
    });
  };

  const handleEditNote = (note: Note) => {
    setEditingNote(note);
    setIsCreateModalOpen(true);
  };

  const handleDeleteNote = (noteId: string) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      setNotes(notes.filter(note => note.id !== noteId));
    }
  };

  const NoteCard: React.FC<{ note: Note }> = ({ note }) => (
    <div className="card p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex-1">{note.title}</h3>
        <div className="flex items-center space-x-2 ml-4">
          <button
            onClick={() => handleEditNote(note)}
            className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleDeleteNote(note.id)}
            className="text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
        {note.content}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-medium">
            {note.subject}
          </span>
          {note.isPublic && (
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs font-medium">
              Public
            </span>
          )}
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {new Date(note.updatedAt).toLocaleDateString()}
        </span>
      </div>
      
      {note.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-3">
          {note.tags.map((tag, index) => (
            <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  const CreateNoteModal: React.FC = () => {
    const [formData, setFormData] = useState({
      title: editingNote?.title || '',
      content: editingNote?.content || '',
      subject: editingNote?.subject || 'Java',
      tags: editingNote?.tags.join(', ') || '',
      isPublic: editingNote?.isPublic || false
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const noteData: Note = {
        id: editingNote?.id || Date.now().toString(),
        title: formData.title,
        content: formData.content,
        subject: formData.subject,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        isPublic: formData.isPublic,
        createdAt: editingNote?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      if (editingNote) {
        setNotes(notes.map(note => note.id === editingNote.id ? noteData : note));
      } else {
        setNotes([noteData, ...notes]);
      }

      setIsCreateModalOpen(false);
      setEditingNote(null);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {editingNote ? 'Edit Note' : 'Create New Note'}
            </h2>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="input-field"
                placeholder="Enter note title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="input-field"
              >
                {subjects.filter(s => s !== 'All').map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Content</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                rows={10}
                className="textarea-field"
                placeholder="Enter your notes here..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tags (comma-separated)</label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({...formData, tags: e.target.value})}
                className="input-field"
                placeholder="e.g., OOP, Programming, Fundamentals"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="isPublic"
                checked={formData.isPublic}
                onChange={(e) => setFormData({...formData, isPublic: e.target.checked})}
                className="mr-2"
              />
              <label htmlFor="isPublic" className="text-sm text-gray-700 dark:text-gray-300">
                Make this note public (visible to other students)
              </label>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="btn-primary flex-1"
              >
                {editingNote ? 'Update Note' : 'Create Note'}
              </button>
              <button
                type="button"
                onClick={() => setIsCreateModalOpen(false)}
                className="btn-secondary flex-1"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Study Notes</h1>
              <p className="text-gray-600 dark:text-gray-300">Organize and share your learning materials</p>
            </div>
            <button
              onClick={handleCreateNote}
              className="btn-primary flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>New Note</span>
            </button>
          </div>

          {/* Filters */}
          <div className="card p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search notes..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Subject Filter */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="block w-full pl-10 pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                >
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Notes Grid */}
          {filteredNotes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNotes.map((note) => (
                <NoteCard key={note.id} note={note} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No notes found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {searchTerm || selectedSubject !== 'All' 
                  ? 'Try adjusting your search or filters'
                  : 'Create your first note to get started'
                }
              </p>
              {!searchTerm && selectedSubject === 'All' && (
                <button
                  onClick={handleCreateNote}
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <Plus className="w-5 h-5" />
                  <span>Create Your First Note</span>
                </button>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Create/Edit Modal */}
      {isCreateModalOpen && <CreateNoteModal />}

      <Footer />
    </div>
  );
};

export default NotesPage;
