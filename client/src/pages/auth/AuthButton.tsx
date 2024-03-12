const AuthButton = ({
  label,
  action,
}: {
  label: string;
  action: () => void;
}) => {
  return (
    <button
      type='submit'
      onClick={action}
      className='bg-black text-white py-3 w-full font-semibold rounded-lg'
    >
      {label}
    </button>
  );
};

export default AuthButton;
