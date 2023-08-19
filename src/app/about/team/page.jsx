export const metadata = {
  title: 'about our Team'
}

async function TeamMemeber() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const members = await response.json();
  return members;
}

const TeamPage = async () => {

  const members = await TeamMemeber();

  return (
    <>
      <h1 className="text-center text-green-600 text-5xl my-5">* OUR TEAM *</h1>
      <div class="grid grid-cols-1 gap-3 mx-5 lg:grid lg:grid-cols-4 lg:gap-4 lg:m-8">
        {
          members.map((member) => (
            <div key={member.id} class="flex flex-col items-center p-7 border border-green-700 rounded-xl bg-lime-50">
              <img className="w-28 h-28 mb-8 rounded-full shadow-lg bg-green-200" />
              <p className="mb-1 text-xl font-medium text-emerald-900">{member.name}</p>
              <p className="mb-1 text-xl font-medium text-green-700 ">{member.email}</p>
              <p className="text-sm text-lime-600">{member.website}</p>
            </div>
          ))
        }
      </div>
    </>

  );
}

export default TeamPage;