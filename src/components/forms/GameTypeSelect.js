import '../../styles/form-control.css'

const GameTypeSelect = ({setGameType}) => {

return (
<fieldset onChange={(e) => setGameType(e.target.value)} className="mb-1">
<legend className="mb-1">Select a game type:</legend>

<label class="form-control"><input type="radio" id="short-answer" name="game-mode" value="short-answer" />
Short Answer</label>

<label class="form-control"><input type="radio" id="multiple-choice" name="game-mode" value="multiple-choice" checked />
Multiple Choice</label>

</fieldset>)

}

export default GameTypeSelect