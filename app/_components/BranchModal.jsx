'use client';

const branches = [
  { id: 1, name: 'Ras Al Khor Mechanic' },
  { id: 2, name: 'Future Mobile Services' },
  { id: 3, name: 'FUTURE TYRES - ALAIN' },
  { id: 4, name: 'Ras Al Khor 1(New Branch) - رأس الخور1' },
  { id: 5, name: 'Ras Al Khor 2 (Old Branch) - رأس الخور2' },
  { id: 6, name: 'AL-QUOZ' },
];

export default function BranchModal({ isOpen, onClose, selectedBranch, onSelect }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[90]"
      onClick={onClose}
    >
      <div 
        className="absolute top-20 left-[50%] transform -translate-x-1/2 lg:left-auto lg:right-[100px] lg:translate-x-0 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden w-[90%] max-w-[350px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-h-[400px] overflow-y-auto">
          {branches.map((branch) => (
            <button
              key={branch.id}
              onClick={() => {
                onSelect(branch.name);
                onClose();
              }}
              className={`
                w-full px-6 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0
                ${selectedBranch === branch.name ? 'bg-blue-50' : ''}
              `}
            >
              <span className={`font-medium ${selectedBranch === branch.name ? 'text-blue-600' : 'text-gray-700'}`}>
                {branch.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}