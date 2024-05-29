const Skill = ({ img, name, small }) => {
  return (
    <>
      {small ? (
        <div className='flex flex-col items-center'>
          <img src={img} alt={name} className='w-8 h-8' />
          <div className="text-center">{name}</div>
        </div>
      ) : (
        <div className='flex flex-col items-center'>
          <img src={img} alt={name} className='w-16 h-16' />
          <div className="text-center">{name}</div>
        </div>
      )}
    </>
  )
}

export default Skill