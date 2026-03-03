"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SmoothScroll from "../../Component/SmothScrolling";

export default function HeroWithVideo() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <SmoothScroll>
        <section className="container w-full bg-gray-50">
          <div className="max-w-[80%] mx-auto space-y-10">
            <div>
              <h1 className="text-emerald-600 text-center text-7xl font-bold select-none">
                Grow Up Humanity
              </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left Content */}
              <div
                data-aos="fade-right"
                className="bg-white shadow-sm p-5 rounded-2xl text-center lg:text-start select-none"
              >
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight order-1">
                  જામનગર જિલ્લાના કાલાવડ તાલુકાના ધુતાપર ગામ
                </h1>

                <p className="mt-6 text-gray-600 text-lg">
                  જામનગર જિલ્લાના કાલાવડ તાલુકાના ધુતાપર ગામે આજની તારીખે જે
                  ચેકડેમમાંથી પાણી જતું રહે છે. તે ચેકડેમ લગભગ 400 ફૂટથી વધુ
                  મોટો એટલે લાંબો છે. અને લગભગ ત્રણેક ફૂટ ઊંડાઈ સુધી રીપેરીંગ
                  માંગે છે.
                </p>
              </div>

              {/* Right YouTube Video */}
              <div data-aos="fade-left" className="w-full order-2">
                <div className="relative  pb-[56.25%] h-full select-none overflow-hidden rounded-xl shadow-lg">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/fXONzYd59hk?start=4"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left Content */}
              <div
                data-aos="fade-right"
                className="relative pb-[56.25%] h-0 select-none overflow-hidden rounded-xl shadow-lg order-2 lg:order-1"
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/QsYMEPEJMSg"
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Right YouTube Video */}
              <div
                data-aos="fade-left"
                className="w-full order-1 lg:order-2 text-center lg:text-start select-none"
              >
                <div className="bg-white shadow-sm p-5 rounded-2xl">
                  <h1 className="text-4xl md:text-4xl font-bold text-gray-800 leading-tight">
                    ચંદુભાઈ વિરાણીનું જળ અભિયાન | ગુજરાતની તરસ છીપાવશે!
                  </h1>
                  <p className="mt-6 text-gray-600 text-lg">
                    ગીરગંગા પરિવાર ટ્રસ્ટ અને પ્રેરણાદાયી ચંદુભાઈ વિરાણી
                    ગુજરાતને જળસમૃદ્ધ બનાવવા માટે એક ભગીરથ કાર્ય કરી રહ્યા છે. આ
                    અભિયાન દ્વારા રાજ્યના ખૂણે ખૂણે પાણી પહોંચાડવાનો અને
                    ખેડૂતોને આત્મનિર્ભર બનાવવાનો સંકલ્પ છે. જાણો આ જળ ક્રાંતિ
                    વિશે અને બનો આ પુણ્ય કાર્યના સહભાગી!
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left Content */}
              <div
                data-aos="fade-right"
                className="bg-white shadow-sm p-5 rounded-2xl text-center lg:text-start select-none"
              >
                <h1 className="text-4xl md:text-4xl font-bold text-gray-800 leading-tight">
                  કેન્દ્રીય જળ મંત્રી માનનીય શ્રી સી.આર.પાટીલ સાહેબે કરેલ સરાહના
                </h1>

                <p className="mt-6 text-gray-600 text-lg">
                  કેન્દ્રીય જળ મંત્રી માનનીય શ્રી સી.આર.પાટીલ સાહેબે ગીરગંગા
                  પરિવાર ટ્રસ્ટ દ્વારા સંપૂર્ણ સૃષ્ટિના જીવરક્ષકના કાર્ય માટે
                  વરસાદી અમૃત સમાન શુદ્ધ પાણી ને બચાવવાનું જે કાર્ય કરી રહ્યા
                  છે. જેમાં ઘણા બધા ડેમો ઓવરફ્લો થઈ ગયેલા છે. જેમાં રાજકોટના
                  કટારીયા ચોકડી પાસે વીરવીરુ અમૃત સરોવરનું જળના વધામણા કરવા તેમજ
                  કાલાવડ રોડ પર આદર્શ કન્યા શાળામાં રીચાર્જ બોર ની કાર્ય પદ્દતિ
                  નીહાળવા માટે પધારેલા અને આ કાર્યને વધુમાં વધુ વેગ મળે એના માટે
                  કેન્દ્ર ગવર્મેન્ટ ખૂબ મહેનત કરશે આમાં પબ્લિક અને સરકારથી
                  લોકભાગીદારી માં આ કામને સરળ બનાવવા માટે વિશ્વાસ આપ્યો છે.
                </p>
              </div>

              {/* Right YouTube Video */}
              <div data-aos="fade-left" className="w-full">
                <div className="relative  pb-[56.25%] h-full select-none overflow-hidden rounded-xl shadow-lg">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/6TeQkl9PKHU"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left Content */}
              <div
                data-aos="fade-right"
                className="relative pb-[56.25%] h-0 select-none overflow-hidden rounded-xl shadow-lg order-2 lg:order-1"
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/B5FhjlVkico"
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Right YouTube Video */}
              <div
                data-aos="fade-left"
                className="w-full order-1 lg:order-2 text-center lg:text-start select-none"
              >
                <div className="bg-white shadow-sm p-5 rounded-2xl">
                  <h1 className="text-4xl md:text-4xl font-bold text-gray-800 leading-tight">
                    જામનગર જિલ્લાના કાલાવડ તાલુકાના ધુતાપર ગામ
                  </h1>
                  <p className="mt-6 text-gray-600 text-lg">
                    હાલમાં ખેડૂતોને ખેતરમાં ઉત્પાદન લેવા માટે પાણી ખૂબ જરૂર હોય
                    પણ વર્ષોથી આ પ્રશ્નો ઉપર કોઈએ ધ્યાન ન આપ્યું હોવાથી ખેડૂતો
                    પણ આનાથી દૂર છે. તેવા સમયે ગીરગંગા પરિવાર ટ્રસ્ટના પ્રમુખ
                    શ્રી દિલીપભાઈ સખીયા, દિનેશભાઈ પટેલ, અશોકભાઈ મોલિયા તેમજ
                    ટ્રસ્ટીઓ દ્વારા ગામડે ગામડે જઈ અને ખેડૂતોને રૂબરૂ મળી તેની
                    આપતી જાણી ત્યારબાદ તૂટેલા ચેકડેમ રીપેર કરવા ઉંચા લેવા તેમજ
                    ડેમના તળમાં ફળદ્રુપ માટી ઉપાડી અને ખેડૂતોના ખેતરમાં નાખવી
                    તેનાથી ચેકડેમ પણ ઊંડો થાય. અને ખેડૂતને પણ ફાયદો થાય તેવું
                    સમજાવી અને ઉદ્યોગપતિ અને દાતાઓ દ્વારા તેમજ ખેડૂતોના સહયોગથી
                    ગીરગંગા પરિવાર ટ્રસ્ટ આ કાર્યને આગળ વધારી અને પાણીનો જંગી
                    જથ્થો જમીનના તળમાં ઉતરે અને ખેડૂતો તેના ખેતરમાં પાક ઉત્પાદન
                    માટેનો ભરપૂર લાભ મેળવે તેવા હેતુથી ગામડે ગામડે ખેડૂતો જાગૃત
                    થાય અને પાણી બચાવે જેનાથી સૃષ્ટિના સર્વે જીવોની રક્ષા થશે.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left Content */}
              <div
                data-aos="fade-right"
                className="bg-white shadow-sm p-5 rounded-2xl text-center lg:text-start select-none"
              >
                <h1 className="text-4xl md:text-4xl font-bold text-gray-800 leading-tight">
                  ગ્રામનેતાઓ, સરકારી અધિકારીઓ અને સમુદાયના સભ્યો સાથે સહયોગ
                </h1>

                <p className="mt-6 text-gray-600 text-lg">
                  ગિરગંગા પરિવાર ટ્રસ્ટ એ એક સમર્પિત નોન-પ્રોફિટ સંસ્થા છે, જે
                  ખાસ કરીને ગુજરાતના ગ્રામિણ સમુદાયો માટે વિકાસ, સુસ્તિતતા અને
                  કલ્યાણના કામોમાં નાવાજણી કરે છે. આ ટ્રસ્ટ વિવિધ પ્રભાવશાળી
                  પ્રોજેક્ટ્સ પર કામ કરે છે જેમ કે જળ સંરક્ષણ, કૃષિ અને સમુદાય
                  સક્ષમતા. તેનો મુખ્ય ધ્યેય ગ્રામોને સુસ્તિત પાણી વ્યવસ્થાપન
                  પદ્ધતિઓ, ઢાંચો વિકાસ અને ખેડૂતો અને ગામલોકોની કલ્યાણ માટેના
                  પ્રોજેક્ટ્સ દ્વારા જીવનના ગુણવત્તાને સુધારવાનો છે. ટ્રસ્ટના
                  મુખ્ય પહેલોમાંથી એક છે ગામોમાં તળાવો ઊંડા કરવાનો પ્રોજેક્ટ, જે
                  પાણી સંગ્રહ સુધારવા અને વરસાદ વગરના સમયગાળા દરમિયાન પાણીની
                  ઉપલબ્ધતા સુનિશ્ચિત કરવા માટે કાર્યરત છે. આ પ્રયાસ સાથે, પાણીની
                  ઘાટતા ઘટાડવામાં, કૃષિ ઉત્પાદનમાં વૃદ્ધિ અને પર્યાવરણીય
                  તંત્રમાં સુધારો કરવામાં મદદ મળે છે. ગ્રામના નેતાઓ, સરકારના
                  અધિકારીઓ અને સમુદાયના સભ્યો સાથે સહયોગ દ્વારા, ગિરગંગા પરિવાર
                  ટ્રસ્ટે અનેક પ્રોજેક્ટ્સ સફળતાપૂર્વક અમલમાં મૂક્યા છે જે
                  ગ્રામજનોએ એ સફળતાને ચિહ્નિત કર્યા છે. આ ટ્રસ્ટનો હેતુ એ છે કે
                  તેઓ સમગ્ર વિસ્તારના બીજા સમુદાયોને પણ આવા સુસ્તિત અભિગમોને
                  અપનાવવાનું પ્રેરણા આપે અને મદદ કરે.
                </p>
              </div>

              {/* Right YouTube Video */}
              <div data-aos="fade-left" className="w-full">
                <div className="relative  pb-[56.25%] h-full select-none overflow-hidden rounded-xl shadow-lg">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/XjlOX0_PV_c"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Video */}
              <div data-aos="fade-right" className="order-2 lg:order-1">
                <div className="w-full aspect-video select-none overflow-hidden rounded-xl shadow-lg">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/B5FhjlVkico"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Content */}
              <div
                data-aos="fade-left"
                className="order-1 lg:order-2 text-center lg:text-start"
              >
                <div className="bg-white shadow-sm p-6 rounded-2xl space-y-6 select-none">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                    નાનો પ્રયાસ, મોટું પરિવર્તન લાવી શકે છે
                  </h1>

                  <p className="text-gray-600 text-lg">
                    આ વિડિયોમાં, આપણે ગિરગંગા પરિવાર ટ્રસ્ટ દ્વારા શરૂ કરાયેલ
                    “જળ ક્રાંતિ 2025” અભિયાન વિશે વાત કરીશું.
                  </p>

                  <ul className="text-gray-600 text-lg space-y-2">
                    <li>
                      ∴ ભરતભાઈ ભોઘરાનો “જળ ક્રાંતિ 2025” માટેનો દ્રષ્ટિકોણ
                    </li>
                    <li>∴ પાણી બચાવવા અને જળ સ્તર ઊંચું લાવવા માટેના કાર્યો</li>
                    <li>
                      ∴ વરસાદી પાણી સંગ્રહ, ચેકડેમ, વૃક્ષારોપણ દ્વારા પરિવર્તન
                    </li>
                    <li>∴ તમે કેવી રીતે આ અભિયાનમાં જોડાઈ શકો</li>
                  </ul>

                  <p className="text-gray-600 text-lg">
                    પાણી એ જીવન છે, અને તેની જાળવણી એ આપણા સૌની જવાબદારી છે.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SmoothScroll>
    </>
  );
}
