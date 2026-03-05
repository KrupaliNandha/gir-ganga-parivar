import DonateData from "@/app/donate/donateData";
// import AllDonatedata from "@/app/donate/alldonateData";

export default async function DonateDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const project = DonateData.find((item) => item.id === id);

  if (!project) {
    return <div className="p-10 text-red-500 text-2xl">Project Not Found</div>;
  }

  const AllDonatedata = DonateData.find((item) => item.id === id);

  if (!AllDonatedata) {
    return <div className="p-10 text-red-500 text-2xl">Project Not Found</div>;
  }

  return (
    <>
      {/* Section - 1 */}
      <section>
        <div>
          <h1>
          </h1>
        </div>
      </section>

      {/* Section - 2 */}
      <section className="container">
        <div className="border border-gray-100 p-3 sm:p-5 space-y-5 rounded-2xl bg-emerald-50">
          {/* Main Layout */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-5 items-stretch">
              {/* LEFT CARD */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-7 h-full">
                {/* Title */}
                <div className="mb-5">
                  <h1 className="text-xl font-extrabold text-emerald-600 leading-snug">
                    {project.title}
                  </h1>

                  <p className="text-lg text-gray-400 mt-1">{project.dec}</p>
                </div>

                <div className="flex flex-wrap items-center gap-5">
                  <p className="font-medium">Your Contribution *</p>

                  <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
                    <span className="bg-gray-100 px-4 py-3 text-lg font-semibold">
                      ₹
                    </span>

                    <p className="px-6 py-3 text-lg font-semibold text-gray-800">
                      {project.amount}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <a href="/cart">
                    <button className="bg-emerald-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-emerald-700 transition cursor-pointer">
                      Donate ⇢
                    </button>
                  </a>
                </div>
              </div>

              {/* RIGHT PANEL */}
              <div className="flex flex-col gap-4 h-full">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 h-full flex flex-col justify-between">
                  <img
                    src="/image/suport/Donent-hero.png"
                    alt="Campaign"
                    className="w-full h-auto object-cover rounded-xl"
                  />

                  <p className="text-[17px] text-center font-extrabold text-gray-800 leading-snug mt-3">
                    Raise Funds For Clean & Healthy Food
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
