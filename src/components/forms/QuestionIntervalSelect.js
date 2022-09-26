import '../../styles/form-control.css'

const QuestionIntervalSelect = ({setCurrentInterval}) => {

return (
<fieldset onChange={(e) => setCurrentInterval(e.target.value)}>
<legend>Select a question read speed:</legend>

<label class="form-control"><input type="radio" id="short-answer" name="question-read-speed" value="500" />
Slowest</label>

<label class="form-control"><input type="radio" id="short-answer" name="question-read-speed" value="300" />
Slower</label>

<label class="form-control"><input type="radio" id="multiple-choice" name="question-read-speed" value="200" />
Medium</label>

<label class="form-control"><input type="radio" id="multiple-choice" name="question-read-speed" value="150" />
Faster</label>

<label class="form-control"><input type="radio" id="multiple-choice" name="question-read-speed" value="50" />
Fastest</label>

</fieldset>)

}

export default QuestionIntervalSelect