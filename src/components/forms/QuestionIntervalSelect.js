import '../../styles/form-control.css'

const QuestionIntervalSelect = ({setCurrentInterval}) => {

return (
<fieldset>
<legend htmlFor='question-read-speed' className="mb-1">Select a question read speed:</legend>

<select className="input-per60" id='question-read-speed' name="question-read-speed" onChange={(e) => {setCurrentInterval(e.target.value)}}>
<option class='form-control' value="500">
Slowest</option>

<option class='form-control' value="300">
Slower</option>

<option class='form-control' value="200">
Medium</option>

<option class='form-control' value="150">
Faster</option>

<option class='form-control' value="50">
Fastest</option>

</select>

</fieldset>)

}

export default QuestionIntervalSelect