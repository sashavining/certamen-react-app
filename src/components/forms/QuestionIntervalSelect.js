import '../../styles/form-control.css'

const QuestionIntervalSelect = ({setCurrentInterval}) => {

return (
<fieldset>
<legend htmlFor='question-read-speed'>Select a question read speed:</legend>

<select id='question-read-speed' name="question-read-speed" onChange={(e) => {setCurrentInterval(e.target.value)}}>
<option class='form-control source-select__input' value="500">
Slowest</option>

<option class='form-control source-select__input' value="300">
Slower</option>

<option class='form-control source-select__input' value="200">
Medium</option>

<option class='form-control source-select__input' value="150">
Faster</option>

<option class='form-control source-select__input' value="50">
Fastest</option>

</select>

</fieldset>)

}

export default QuestionIntervalSelect