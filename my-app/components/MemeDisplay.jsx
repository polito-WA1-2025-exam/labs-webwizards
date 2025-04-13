import { Container, Button } from 'react-bootstrap'

function MemeDisplay(props) {

    const meme = props.meme;

    return (
        <Container fluid>
            <div className="row mb-4 d-flex justify-content-center">
                <div className="col text-center">
                    <h2>Round #1</h2>
                    <img 
                        src={meme.picture} 
                        alt="Meme" 
                        className="img-fluid rounded shadow" 
                        id="meme-image" 
                    />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h3>Select the best caption:</h3>
                    <div className="list-group">
                        {meme.captions.map((caption, index) => (
                            <CaptionDisplay 
                                key={index} 
                                caption={caption} 
                                onClick={() => props.onCaptionSelect(caption)} 
                            />
                        ))}
                    </div>
                </div>
            </div>

            <FeedbackSection />

        </Container>
    );
}

function CaptionDisplay(props) {
    return (
        <div className="list-group-item list-group-item-action" onClick={props.onClick}>
            {props.caption}
        </div>
    );
}

function FeedbackSection(props) {
    return (
        <div className="row mt-4">
            <div className="col text-center">
                <h3>Score: </h3><p>{props.score}</p>
                <Button variant="primary" onClick={props.onNextRound}>Next Round</Button>
                <Button variant="danger" onClick={props.onNextRound}>End Game</Button>
            </div>
        </div>
    );
}

export default MemeDisplay