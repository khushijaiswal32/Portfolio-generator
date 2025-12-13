import React,{useState,useEffect} from "react";
import Header from "./components/Header";
import Builder from "./pages/Builder";
import PreviewPages from "./pages/PreviewPages"
export default function App() {
  const [form , setForm] = useState( () =>{
    //load saved data if available
    const saved = localStorage.getItem("portfolio_data");
    return saved
    ? JSON.parse(saved)
    :{
     template: "template1",   // default
  name: "",
  role: "",
  about: "",
  skills: [],
  projects: [],
  github: "",
  linkedin: ""
    };
  });
  // //Auto- save to Local Storage whenever form changes
  useEffect (() =>{
    localStorage.setItem("portfolio_data" ,JSON.stringify(form));
  }, [form]);
  return (
 
    <div>
      <Header />
      <Builder  form={form} setForm={setForm} />
      <PreviewPages form = {form} />
    </div>
  );
}

 
