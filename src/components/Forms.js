import { useForm } from 'react-hook-form'

export const Form = () => {
    const {register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
       <h1>Hello this are forms </h1>

       <form onSubmit={handleSubmit(onSubmit)}>

        <input type= "text" placeholder="Full Name..."   {...register("fullName")} />
        <input type= "text" placeholder="Email..."      {...register("email")} />
        <input type= "text" placeholder="Age..."         {...register("age")} />
        <input type= "password" placeholder="Pasword..."        {...register("password")}  />
        <input type= "password" placeholder="Confirm Password..."       {...register("confirmPassword")} />
        <input type= "submit" />


       </form>

        </div>
    )
}