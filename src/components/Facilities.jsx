import ser11 from '../cdn/services/1/1.jpg'
import ser12 from '../cdn/services/1/2.jpg'
import ser13 from '../cdn/services/1/3.jpg'
import f1 from '../cdn/f1.jpg'
import f2 from '../cdn/f2.jpg'
import f3 from '../cdn/f3.jpg'
import f4 from '../cdn/f4.jpg'
import f5 from '../cdn/f5.jpg'
import f6 from '../cdn/f6.jpg'
// import f7 from '../cdn/f7.jpg'
// import f8 from '../cdn/f8.jpg'
// import f9 from '../cdn/f9.jpg'
import f10 from '../cdn/f10.jpg'
import { Carousel3 } from './Carousel'

const facData = [
    {
        title: "Phacoemulsification (Cataract Surgery)",
        desc: "Phacoemulsification is a modern cataract surgery method in which the eye's internal lens is emulsified with an ultrasonic handpiece and aspirated from the eye. Aspirated fluids are replaced with irrigation of balanced salt solution to maintain the anterior chamber.",
        benefits: ["No Injection, no stitch, no bandage cataract surgery (PHACO)","Safe PHACO emulsification surgery with the most advanced and sophisticated machine in the world (CENTURION VISION SYSTEM)","All Premier IOL, Toric, Multifocal and Trifocal"],
        thumbnail: f1,
        images: [ser11, ser12, ser13],
    },
    {
        title: "Small Incision Cataract Surgery (SICS)",
        desc: "In this procedure your doctor makes a longer incision on the side of the cornea and removes the cloudy core of the lens in one piece. The rest of the lens is removed by suction.",
        benefits: ["It is most often done as an outpatient procedure with local anesthesia and light intravenous sedation.","The incision made to remove the cataract is so small that it usually does not require stitches.","After the natural lens has been removed, it often is replaced by an artificial lens, called an intraocular lens (IOL)."],
        thumbnail: f2,
        images: [ser11, ser12, ser13],
    },
    {
        title: "Intraocular Lens (IOL, Cataract Surgery)",
        desc: "An intraocular lens (or IOL) is a tiny, artificial lens for the eye. It replaces the eye's natural lens that is removed during cataract surgery. Although all intraocular lenses are used to restore clarity of vision, there are many intraocular lens choices available to patients today.",
        benefits: ["Standard lens implants are mono-focal, meaning they are designed to correct the vision at one focal length. ","Premium IOLs include the presbyopia-correcting IOLs and the toric IOLs. ","Presbyopia-correcting intraocular lenses are designed to correct for distance and near vision. ","Toric intraocular lenses are used for those patients with astigmatism",],
        thumbnail: f3,
        images: [ser11, ser12, ser13],
    },
    {
        title: "Perimetry (Glaucoma Treatment)",
        desc: "Perimetry is the systematic measurement of visual field function (the total area where objects can be seen in the peripheral vision while the eye is focused on a central point). A perimetry test (visual field test) measures all areas of your eyesight, including your side, or peripheral, vision.",
        benefits: ["To do the test, you sit and look inside a bowl-shaped instrument called a perimeter.","While you stare at the center of the bowl, lights flash.","You press a button each time you see a flash.","At the end of the test, a printout shows if there are areas of your vision where you did not see the flashes of light. These are areas of vision loss, which may show an early sign of Glaucoma",],
        thumbnail: f4,
        images: [ser11, ser12, ser13],
    },
    {
        title: "YAG Laser (Glaucoma Treatment)",
        desc: "The YAG laser is the laser used to clear the frosting from the back surface of an intraocular lens. YAG laser treatment is painless and is completed from outside the eye in a few minutes. There are numerous ophthalmic applications for Nd:YAG lasers.",
        benefits: ["YAG lasers can also be used to cut the anterior capsule for capsular block syndrome and capsular phimosis","In malignant glaucoma, disruption of the anterior hyaloid face is performed with the YAG laser","In refractory glaucomas, these lasers can be used for cyclophotoablation of the ciliary body","They have also been helpful for draining premacular subhyaloid hemorrhages in patients with Valsalva retinopathy",],
        thumbnail: f5,
        images: [ser11, ser12, ser13],
    },
    {
        title: "Argon Green Laser (Medical Retina)",
        desc: "Argon laser treatment can be used to treat a number of eye conditions including glaucoma, diabetic eye disease and some retinal holes and tears. An argon laser has multiple uses in ophthalmology.",
        benefits: ["An argon gas laser is used for trabeculoplasty for narrow-anglegalucoma.","Small tears in the retina in individuals with high myopia or other diseases can be repaired with an argon laser.","Proliferative retinopathy: Abnormal blood vessel growth over the retina in people with diabetes with uncontrolled sugar levels can cause swelling and scarring of the retina.","Choroidopathies, A group of diseases can cause abnormal leaky blood vessels to grow over the retina.",],
        thumbnail: f6,
        images: [ser11, ser12, ser13],
    },
    {
        title: "Trabeculectomy (Glaucoma Treatment)",
        desc: "Trabeculectomy is a type of glaucoma surgery performed on the eye that creates a new pathway for fluid inside the eye to be drained. This is an outpatient procedure performed in the operating room.",
        benefits: ["It is used to prevent worsening of vision loss due to glaucoma by lowering eye pressure","Surgery involves either laser treatment or making a cut in the eye to reduce the intraocular pressure","The type of surgery your doctor recommends will depend on the type and severity of your glaucoma and the general health of your eye.","Surgery can help lower pressure when medication is not sufficient. However, it cannot reverse vision loss.",],
        thumbnail: ser11,
        images: [ser11, ser12, ser13],
    },
    {
        title: "Cornea Transplantation",
        desc: "A cornea transplantation, also known as corneal grafting, is a surgical procedure where a damaged or diseased cornea is replaced by donated corneal tissue. When the entire cornea is replaced it is known as penetrating keratoplasty and when only part of the cornea is replaced it is known as lamellar keratoplasty.",
        benefits: ["The cornea is the clear outer layer at the front of the eyeball","When the cornea is damaged, it can become less transparent or its shape can change","This can prevent light reaching the retina and causes the picture transmitted to the brain to be distorted or unclear.","Corneal Transplantation with donated ones can help improve sight, relieve pain and treat severe infection or damage",],
        thumbnail: ser11,
        images: [ser11, ser12, ser13],
    },
    {
        title: "Pterygium surgery (Oculoplasty)",
        desc: "Pterygium surgery is a procedure performed to remove noncancerous conjunctiva growths (pterygia) from the eye. The conjunctiva is the clear tissue covering the white part of the eye and the inside of the eyelids. Some cases of a pterygium produce little to no symptoms",
        benefits: ["Severe overgrowth of conjunctiva tissue can cover the cornea and interfere with your vision","The exact cause of pterygium is not known. One explanation is that too much exposure to ultraviolet (UV) light can lead to these growths.","It occurs more often in people who live in warm climates and spend a lot of time outdoors in sunny or windy environments",],
        thumbnail: ser11,
        images: [ser11, ser12, ser13],
    },
    {
        title: "Intravitreal Injections (Medical Retina)",
        desc: "Intravitreal injections are drugs that are injected into the eye to reduce swelling and capillary growth. Usually, the drugs belong to the “Anti-Vascular endothelial growth factor” group of medicines, so the treatment may be referred to as “Anti-VEGF” treatment. However, in some cases, steroid drugs may be injected instead.",
        benefits: ["Generally, any retinal condition caused by new blood vessel growth and fluid leakage may benefit from injections","When the anti-VEGF drugs are injected into the eye, they stop the growth of new blood vessels.","These new blood vessels are bad because they grow abnormally and bleed into the eye.","Anti-VEGF medicines interrupt this process, which should slow the growth and any such associated swelling",],
        thumbnail: f10,
        images: [ser11, ser12, ser13],
    },
]
const Facilities = () => {
    return(
        <div className="facilities">
            {facData.map((ele, ind) => {
                return(
                    <div className="facilities__fac-card" key = {ind}>
                        <div className="facilities__fac-card__p1">
                            {/* <Carousel3 images = {ele.images}></Carousel3> */}
                            <img src={ele.thumbnail} alt="Image" />
                        </div>
                        <div className="facilities__fac-card__p2">
                        </div>
                        <div className="facilities__fac-card__p3">
                            <p>{ele.title}</p>
                            <p>{ele.desc}</p>
                            <p>Details:</p>
                            <ul>
                                {ele.benefits.map((ele1, ind1) => {
                                    return(
                                        <li key={ind1}>{ele1}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Facilities