
const CategorySelect = ({setCurrentCategory}) => {
    return (
    <fieldset className="mb-1">
    <legend htmlFor='question-category' className="mb-1">Select a category for your game:</legend>
    <select className="input-per60" id='question-category' name="category" onChange={(e) => setCurrentCategory(e.target.value)}>

    <option class='form-control' value="" selected>
    Any</option>
    
    <option class='form-control' value="Myth">
    Myth</option>
    
    <option class='form-control' value="History">
    History</option>
    
    <option class='form-control' value="Literature">
    Literature</option>
    
    <option class='form-control' value="Culture">
    Culture</option>
    
    <option class='form-control' value="PMAQ">
    PMAQ</option>
    
    <option class='form-control' value="Derivatives">
    Derivatives</option>
    </select>
    </fieldset>
    
    )    
}
    
export default CategorySelect