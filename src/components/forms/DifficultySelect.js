const DifficultySelect = ({setCurrentDifficulty}) => {

return (
<fieldset onChange={(e) => setCurrentDifficulty(e.target.value)}>
<legend>Select a difficulty level:</legend>

<input type="radio" id="Any" name="difficulty" value=""/>
<label htmlFor="Any">Any</label>

<input type="radio" id="Novice" name="difficulty" value="Novice" />
<label htmlFor="Novice">Novice</label>

<input type="radio" id="Intermediate" name="difficulty" value="Intermediate" />
<label htmlFor="Intermediate">Intermediate</label>

<input type="radio" id="Advanced" name="difficulty" value="Advanced"/>
<label htmlFor="Advanced">Advanced</label>

</fieldset>)

}

export default DifficultySelect