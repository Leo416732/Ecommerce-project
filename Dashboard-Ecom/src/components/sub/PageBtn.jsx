export default function PageBtn(p) {
  const { btnName, btnClass } = p;
  return <button className={btnClass}>{btnName}</button>;
}
