export const validateCommentForm =(values)=>{
    const errors = {}
    if(!values.rating || values.rating==='Select...'){
        errors.rating='Required'
    }
    
    if (values.author.length<2){
        errors.author='Must be at least 2 characters.'
    } else if (values.author.length>15){
        errors.author='Must be 15 character or less.'
    }
    return errors
}