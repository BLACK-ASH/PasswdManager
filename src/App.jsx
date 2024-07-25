import { useEffect, useState } from 'react';
import uniqid from 'uniqid';
function App() {
  const [password, setpassword] = useState({ "id": "", "url": "", "username": "", "password": "" });
  const [passwords, setpasswords] = useState(() => {
    const savedData = localStorage.getItem('passwords');
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem('passwords', JSON.stringify(passwords));
  }, [passwords]);

  const handleChange = (e) => {
    setpassword({ ...password, id: uniqid(), [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setpasswords([...passwords, password]);
  };
  const handleDelete = (e) => {
    let id = e.target.name;
    let newpass = passwords.filter((item) => {
      return item.id !== id
    });
    setpasswords(newpass);
    alert("password is delete");
  };
  const handleDelAll = (e) => {
    let a = confirm();
    a ? setpasswords([]) : passwords;
  };

  return (
    <>
      <main className='max-sm:w-full w-2/3 mx-auto mt-4 bg-purple-300  min-h-[90vh]  ' >
        <div className="head rounded-lg bg-purple-400 p-4">
          <div className='text-2xl' >
            <span className='text-black' >&lt;</span>
            <span className='text-white' >Pass</span>
            <span className='text-black' >Manage</span>
            <span className='text-black' >&gt;</span>
          </div>
          <input onChange={handleChange} name='url' value={password.url} className='w-full my-2 p-2 border border-purple-950 rounded-xl' placeholder='Enter Website URL' type="text" />
          <div className='flex gap-2'>
            <input onChange={handleChange} name='username' value={password.username} className='w-full p-2 border border-purple-950 rounded-xl' placeholder='Enter Username' type="text" />
            <input onChange={handleChange} name='password' value={password.password} className='w-full p-2 border border-purple-950 rounded-xl' placeholder='Enter Password' type="text" />
          </div>
          <button onClick={handleSubmit} className='bg-purple-800 p-2 m-2 text-white rounded-xl' >SAVE PASSWORD</button>
          <button className='bg-red-600 p-2 m-2 text-white rounded-xl' onClick={handleDelAll}>delAll</button>
        </div>
        <div className="mt-4">
          {
            passwords.map((e) => {
              return <div key={e.id} className='flex w-[99%] bg-purple-200 m-1 p-2 rounded-sm items-center justify-evenly'>
                <div className='w-2/3' >
                  <div className='flex  mb-1 items-center '>
                    <p className=' bg-purple-100  px-2 pl-3 rounded-md w-full h-7 overflow-hidden '>{e.url}</p>
                    <button className='m-1 ml-4  bg-purple-800 rounded-md p-1' ><a target='blanck' href={e.url}><img width={20} src="/visit.png" alt="COPY" /></a></button>
                  </div>
                  <div className='flex justify-between'>
                    <p className=' bg-purple-100 pl-3 rounded-md '>{e.username}
                      <button className='m-1 ml-4  bg-purple-800 rounded-md p-1' onClick={() => navigator.clipboard.writeText(e.username)}>
                        <img width={20} src="/copy.png" alt="COPY" />
                      </button>
                    </p>
                    <p className=' bg-purple-100 pl-3 rounded-md ' >
                      {e.password}
                      <button className='m-1 ml-4  bg-purple-800 rounded-md p-1' onClick={() => navigator.clipboard.writeText(e.username)}>
                        <img className='invert' width={20} src="/copy.png" alt="COPY" />
                      </button>
                    </p>
                  </div>
                </div>
                <button onClick={handleDelete} >
                  <img name={e.id} width={20} src="/delete.png" alt="COPY" />
                </button>
              </div>
            })}
        </div>
      </main >
    </>
  );
};

export default App;
