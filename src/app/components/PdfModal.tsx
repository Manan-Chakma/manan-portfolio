export function PdfModal({ isOpen, onClose, pdfUrl }: { isOpen: boolean; onClose: () => void; pdfUrl: string }) {
    if (!isOpen) return null;

    return (
        <div className='modal-overlay' style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
            <div style={{ backgroundColor: 'white', paddingTop: '30px', width: '80%', height: '80%', position: 'relative' }}>
                <button onClick={onClose} style={{ position: 'absolute', top: '5px', right: '10px', zIndex: 10 }}>CLOSE</button>
                <iframe
                    src={pdfUrl}
                    style={{ width: '100%', height: '100%' }}
                    title="PDF Preview"
                />
            </div>
        </div >
    );
};
