import { useContext } from "react"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { AuthContext } from "../../providers/AuthProvider"
import { Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'



const SignUp = () => {
const {register, handleSubmit, reset, formState: {errors}} = useForm()
const {createUser, updateUserProfile} = useContext(AuthContext)
const navigate = useNavigate()

const onSubmit = data =>{
    console.log(data)
    createUser(data.email, data.password)
    .then(result=>{
        const loggedUser = result.user
        console.log(loggedUser)
        updateUserProfile(data.name, data.photoURL)
        .then(()=>{

            console.log('user profile info updated')
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Created Successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')

        })
        .catch(error=>console.log(error))
    })
}

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up </title>
        
      </Helmet>

      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card md:w-1/2 bg-base-100 w-full max-w-sm shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" {...register("photoURL",{ required: true })} placeholder="Photo URL" className="input input-bordered" />
          {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name",{ required: true })} name="name" placeholder="name" className="input input-bordered" />
          {errors.name && <span className="text-red-600">Name is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email",{ required: true })} name="email" placeholder="email" className="input input-bordered" />
          {errors.email && <span className="text-red-600">Email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password",{ required: true, minLength:6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/})} name="password" placeholder="password" className="input input-bordered" />
          {errors.password?.type==='required' && <span className="text-red-600">Password is required</span>}
          {errors.password?.type==='minLength' && <span className="text-red-600">Password must be 6 characters</span>}
          {errors.password?.type==='maxLength' && <span className="text-red-600">Password must be less than 20 characters</span>}
          {errors.password?.type==='pattern' && <span className="text-red-600">Password must have one uppercase , one lower case , one number and one special character </span>}
        </div>
        
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Signup" />
        </div>
      </form>
      <p><small>Already have an account? <Link to='/login'>LogIn</Link></small></p>
   
    </div>
  </div>
</div>

    </>
    
  )
}

export default SignUp