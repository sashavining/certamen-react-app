import '../../styles/form-control.css'
import { useEffect } from 'react'

const DifficultySelect = ({setCurrentDifficulty}) => {

useEffect(() => {setCurrentDifficulty("Novice")}, [setCurrentDifficulty], [])

return (
<fieldset onChange={(e) => setCurrentDifficulty(e.target.value)} className="mb-1">
<legend className="mb-1">Select a difficulty level:</legend>

<label class="form-control"><input type="radio" id="Novice" name="difficulty" value="Novice" defaultChecked/>
Novice</label>

<label class="form-control"><input type="radio" id="Intermediate" name="difficulty" value="Intermediate" />
Intermediate</label>

<label class="form-control"><input type="radio" id="Advanced" name="difficulty" value="Advanced"/>
Advanced</label>

</fieldset>
)

}

export default DifficultySelect