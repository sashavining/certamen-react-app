
const CategorySelect = ({setCurrentCategory}) => {
    return (
    <fieldset onChange={(e) => setCurrentCategory(e.target.value)}>
    <legend>Select a category for your game:</legend>
    
    <label class="form-control"><input type="radio" id="Any" name="category" value="" />
    Any</label>
    
    <label class="form-control"><input type="radio" id="Novice" name="category" value="Myth" />
    Myth</label>
    
    <label class="form-control"><input type="radio" id="Intermediate" name="category" value="History" />
    History</label>
    
    <label class="form-control"><input type="radio" id="Advanced" name="category" value="Literature"/>
    Literature</label>
    
    <label class="form-control"><input type="radio" id="Advanced" name="category" value="Culture"/>
    Culture</label>
    
    <label class="form-control"><input type="radio" id="Advanced" name="category" value="PMAQ"/>
    PMAQ</label>
    
    <label class="form-control"><input type="radio" id="Advanced" name="category" value="Derivatives"/>
    Derivatives</label>
    
    </fieldset>
    
    )    
}
    
export default CategorySelect