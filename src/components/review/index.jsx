import ReviewCard from "./reviewCard";
function ReviewSection() {
  return (
    <div>
      <section className="flex flex-col justify-center items-center py-10 bg-slate-200 text-black h-full">
        <h2 className=" text-4xl">Reviews</h2>
        <p className="py-3 text-lg text-slate-400">Hear what people say</p>
        <ReviewCard />
      </section>
    </div>
  );
}

export default ReviewSection;
