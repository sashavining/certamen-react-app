import '../../styles/form-control.css'

const DifficultySelect = ({setCurrentDifficulty}) => {

return (
<fieldset onChange={(e) => setCurrentDifficulty(e.target.value)} className="mb-1">
<legend>Select a difficulty level:</legend>

<label class="form-control"><input type="radio" id="Any" name="difficulty" value="" />
Any</label>

<label class="form-control"><input type="radio" id="Novice" name="difficulty" value="Novice" />
Novice</label>

<label class="form-control"><input type="radio" id="Intermediate" name="difficulty" value="Intermediate" />
Intermediate</label>

<label class="form-control"><input type="radio" id="Advanced" name="difficulty" value="Advanced"/>
Advanced</label>

</fieldset>
)

}

export default DifficultySelect