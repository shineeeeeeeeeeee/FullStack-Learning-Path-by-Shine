
import './App.css';

import { useForm } from "react-hook-form";


const App = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data){
    console.log("Submitting the form: ",data);
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }

  return(
    <form action="" 
    onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">First Name: </label>
        <input type="text" 
        {...register('firstName', { 
          required: true, 
          minLength: {value: 3, message: "Min length : 3"} })} 
          className={errors.firstName ? 'input-error' : ""}/>
      </div>
      {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      <br />
      <div>
        <label htmlFor="">Middle Name: </label>
        <input type="text" 
        {...register('middleName')} />
      </div>
      <br />
      <div>
        <label htmlFor="">Last Name: </label>
        <input type="text" 
        {...register('lastName', {
          // Validation 
          pattern: {
            value : /^[A-Za-z]+$/i,
            message: "Last Name is not as per the rules"
          },
          required: {value: true, message: "Required!"}, 
          maxLength: 20 })} 
          className={errors.firstName ? 'input-error' : ""}/>
      </div>
      {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
      <br />
      <input type="submit" disabled={isSubmitting} 
      value={isSubmitting ? "Submitting" : "Submit"}/>
    </form>
  )
}

export default App
