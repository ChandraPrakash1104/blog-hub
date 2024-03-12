import { NavLink } from 'react-router-dom';

const FormHeader = ({
  head,
  subHead,
  linkLabel,
  linkTo,
}: {
  head: string;
  subHead: string;
  linkLabel: string;
  linkTo: string;
}) => {
  return (
    <div className='text-center'>
      <div className='font-extrabold text-3xl'>{head}</div>
      <div className='text-slate-500'>
        {subHead}
        <NavLink to={linkTo} className='underline'>
          {linkLabel}
        </NavLink>
      </div>
    </div>
  );
};

export default FormHeader;
