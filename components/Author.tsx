/* eslint-disable @next/next/no-img-element */
export default function Author({ Data }: any) {
  console.log(Data);
  return (
    <>
      <div className="sidebar author-card h-10 w-32 text-cyan ">
        <h3>Author</h3>
        <img src={Data.avatar_url} alt="" />
        <div className="author-name">{Data.name}</div>
        <div className="author-bio">{Data.bio}</div>
        <div className="btn">Follow</div>
      </div>
    </>
  );
}
