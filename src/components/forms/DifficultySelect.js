const DifficultySelect = ({setCurrentDifficulty}) => {

return (
<fieldset onChange={(e) => setCurrentDifficulty(e.target.value)}>
<legend>Select a difficulty level:</legend>

<label htmlFor="Any"><input type="radio" id="Any" name="difficulty" value=""/>
Any</label>

<label htmlFor="Novice"><input type="radio" id="Novice" name="difficulty" value="Novice" />
Novice</label>

<label htmlFor="Intermediate"><input type="radio" id="Intermediate" name="difficulty" value="Intermediate" />
Intermediate</label>

<label htmlFor="Advanced"><input type="radio" id="Advanced" name="difficulty" value="Advanced"/>
Advanced</label>

</fieldset>)

}

export default DifficultySelect