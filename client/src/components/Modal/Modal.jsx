import "./Modal.css";

export default function MoonModal({show, set, moon}) {
	return (
        <>
            { show ? ( 
                <div className="modal" onClick={() => set()}>
                    <div className="modal-content">
                        <header>
                            <h2>{moon[0]}</h2>
                        </header>
                        <span>Size: { moon[2] } miles</span>
                        <section>
                            <span>{ moon[1] }</span>
                        </section>
                    </div>
                </div>
                ) : (<></>)
            }
        </>
	);
}

