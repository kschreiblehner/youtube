import { Link } from 'react-router-dom';
import './HoverableLink.scss';

export default function HoverableLink({ href, children }) {
  console.log(children)
  return <Link to={href} className="link">{children}</Link>;
}
