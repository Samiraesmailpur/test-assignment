import photo from '@assets/photo.jpeg'

const UserProfile = () => {
  return(
    <div className='sm:ml-60 py-4'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center gap-0.25 flex-col mb-2.5 text-slate-500'>
          <img src={photo} alt="user image" className='w-60 h-60 rounded-full' />
          <p className='font-semibold text-xl text-black'>Lisa Wang</p>
          <p>lisa@gmail.com</p>
          <p>Hatkom</p>
        </div>
        <p className='text-lg'>Hatkom a small agency-software company, composed of a dedicated team of professionals known for their expertise in crafting custom software solutions. We specialize in creating applications that cater to the specific needs of businesses and organizations, with a focus on streamlining operations and enhancing overall productivity.</p>
      </div>
    </div>
  )
};


export default UserProfile;