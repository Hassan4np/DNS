
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { app } from "../Firebase/firebase.comfig";
import useAxousPublic from "../Hook/useAxousPublic";
const provider = new GoogleAuthProvider();
const auth = getAuth(app);


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setuser] = useState({});
    const [isLoading,setisLoading] = useState(true);
    const AxousePublic = useAxousPublic();
//google email passwrd login--->
const UserLogin=(email,password)=>{
    setisLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
};
//google login----->
const UserGoogleLogin = () => {
    setisLoading(true)
    return signInWithPopup(auth, provider);
}
//User sign up------->
const UserSignup=(email,password)=>{
    setisLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
};
    //UserLogout------->
    const UserLogout = () => {
        setisLoading(true)
        return signOut(auth);
    }
//userAuth----->
useEffect(() => {
    onAuthStateChanged(auth, (current) => {
        setuser(current)
        setisLoading(false)
        if (current) {
          const userinfo = { email: current?.email }
          AxousePublic.post('jwt', userinfo)
              .then(res => {
                  if (res.data.token) {
                      localStorage.setItem('access-token', res.data.token);
                  }
                  setisLoading(false)
              })
      } else {
          //todo
          localStorage.removeItem('access-token')
          setisLoading(false)
      }
    })
}, []);
  const Authinfo = {
    UserLogin,UserGoogleLogin,UserSignup,UserLogout,user,isLoading
  };
  return (
    <div>
      <AuthContext.Provider value={Authinfo}>{children}</AuthContext.Provider>
    </div>
  );
};
AuthProvider.propTypes = {
  children: AuthProvider.node, // Add validation for the 'children' prop
};

export default AuthProvider;
