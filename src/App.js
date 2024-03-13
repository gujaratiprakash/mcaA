import Contact from './Contact.js'
const mca = require('./mca.json')

function App(props) {
  console.log(mca)
  return (
    <>
    {/* <Codepan title="create laravel project" content="composer create-project laravel/laravel projectname" />
    <Codepan titleBackColor="green" title="" content="" />
    <Codepan titleBackColor="yellow" title="" content="" />
    <Codepan titleBackColor="red" title="node module install" content="npm install -f" /> */}
    {/* {
      mca.map(function(student){
        return <Contact image={`https://cms.atmiya.edu.in/images/Stud_Photo/${student.AdmissionNo}.JPG`} name={student.StudentName} description={`${student.Division} - ${student.RollNo}`} />
      })
    } */}

<Contact image={`https://cms.atmiya.edu.in/images/Stud_Photo/${mca[0].AdmissionNo}.JPG`} name={mca[0].StudentName} description={`${mca[0].Division} - ${mca[0].RollNo}`} />
<Contact image={`https://cms.atmiya.edu.in/images/Stud_Photo/${mca[8].AdmissionNo}.JPG`} name={mca[8].StudentName} description={`${mca[8].Division} - ${mca[8].RollNo}`} />
    
    </>
  );
}

export default App;
