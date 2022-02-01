//This is the service card. Gonna iterate through all in services data
//Imports
import serviceDummy from '../cdn/serdum.jpg'
import { Link, withRouter } from 'react-router-dom'
import ser11 from '../cdn/services/1/1.jpg'
import ser12 from '../cdn/services/1/2.jpg'
import ser13 from '../cdn/services/1/3.jpg'
import arThumb from '../cdn/arThumb.jpg'
import oakThumb from '../cdn/oakThumb.jpg'
import sbThumb from '../cdn/sbThumb.jpg'
import gatThumb from '../cdn/gatThumb.jpg'
import gThumb from '../cdn/gThumb.jpg'
import dioThumb from '../cdn/dioThumb.jpg'
import asThumb from '../cdn/asThumb.jpg'
import bsThumb from '../cdn/bsThumb.jpg'
import ffaThumb from '../cdn/ffaThumb.jpg'
import d3Thumb from '../cdn/d3Thumb.jpg'
import ar2 from '../cdn/ar1.jpg'
import ar1 from '../cdn/ar2.jpg'
import as2 from '../cdn/as1.jpg'
import as1 from '../cdn/as2.jpg'
import as3 from '../cdn/as3.jpg'
import oak2 from '../cdn/oak1.jpg'
import oak1 from '../cdn/oak2.jpg'
import sb2 from '../cdn/sb1.jpg'
import sb1 from '../cdn/sb2.jpg'
import sb3 from '../cdn/sb3.jpg'
import gat2 from '../cdn/gat1.jpg'
import gat1 from '../cdn/gat2.jpg'
import gat3 from '../cdn/gat3.jpg'
import g2 from '../cdn/g1.jpg'
import g1 from '../cdn/g2.jpg'
import g3 from '../cdn/g3.jpg'
import dio2 from '../cdn/dio1.jpg'
import dio1 from '../cdn/dio2.jpg'
import dio3 from '../cdn/dio3.jpg'
import bs2 from '../cdn/bs1.jpg'
import bs1 from '../cdn/bs2.jpg'
import bs3 from '../cdn/bs3.jpg'
import ffa2 from '../cdn/ffa1.jpg'
import ffa1 from '../cdn/ffa2.jpg'
import ffa3 from '../cdn/ffa3.jpg'
import d32 from '../cdn/d31.jpg'
import d31 from '../cdn/d32.jpg'
import d33 from '../cdn/d33.jpg'
const servicesData = [
    {
        title: "Auto Refractometer",
        desc: "An auto refractor or automated refractor is a computer-controlled...",
        slug: "auto-refractometer",
        initialThumbnail: arThumb,
        images: [ar1, ar2, ar1],
        detailedDesc: "An auto refractor or automated refractor is a computer-controlled machine used during an eye examination to provide an objective measurement of a person's refractive error and prescription for glasses or contact lenses. Autorefractors only take a few moments to determine each measurement for each eye. Whats more, autorefractors are quite reliable and used in conjunction with manually switch lenses in front of your eyes to provide ideal vision correction. We are equipped with a state of the art TOPCON RM 1 (Japan).",
        pleaseRead: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non at magni eum praesentium earum nesciunt, similique ducimus suscipit porro asperiores culpa quos reiciendis, repellendus est molestias explicabo soluta facilis expedita aliquid. Vitae consectetur ad repellendus quidem esse eius odio et?",
        pricing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, alias."
    },
    {
        title: "Optical Biometer - Tomey OA-2000/ Optical Automated Keratometer",
        desc: "",
        slug: "optical-automated-keratometer",
        initialThumbnail: oakThumb,
        images: [oak1, oak2, oak1],
        detailedDesc: "Keratometry (K) is the measurement of the corneal curvature; corneal curvature determines the power of the cornea. Optical Biometry is a non invasive procedure measure anterior curvature of cornea, axial length, anterior chamber depth, lens thickness etc. All these measured values are used to calculate intra ocular lens power. Optical Biometry is a non invasive procedure measure anterior curvature of cornea, axial length, anterior chamber depth, lens thickness etc. Accurate measurements are critical for determining the correct power of an IOL before it is implanted during cataract surgery. Before implantation the correct lens power needs to be determined. The process of measuring the various anatomical characteristics of the eye that are needed for IOL power calculation is called ocular biometry. Optical biometry, also known as ophthalmic biometry, using partial coherence interferometry has become the gold standard in ocular biometry as it is highly accurate, easy to perform, non-invasive and comfortable for the patient.",
        pleaseRead: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non at magni eum praesentium earum nesciunt, similique ducimus suscipit porro asperiores culpa quos reiciendis, repellendus est molestias explicabo soluta facilis expedita aliquid. Vitae consectetur ad repellendus quidem esse eius odio et?",
        pricing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, alias."
    },
    {
        title: "Slitlamp Biomoicroscopy",
        desc: "Slit lamp is an instrument which emits a narrow but intense beam...",
        slug: "slitlamp-biomoiscroscopy",
        initialThumbnail: sbThumb,
        images: [sb1, sb2, sb3],
        detailedDesc: "Slit lamp is an instrument which emits a narrow but intense beam of light, used for examining the eye. When you visit your eye doctor, they are not just checking to see if you can read the lines on the chart clearly. They are also making sure your eyes are healthy. To do this, a “slit lamp” is used. Its a special microscope and light that lets your doctor see your eyes in 3-D, both inside and out. It is common instrument used in regular eye examination.",
        pleaseRead: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non at magni eum praesentium earum nesciunt, similique ducimus suscipit porro asperiores culpa quos reiciendis, repellendus est molestias explicabo soluta facilis expedita aliquid. Vitae consectetur ad repellendus quidem esse eius odio et?",
        pricing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, alias."
    },
    {
        title: "Goldmann Applanation Tonometry",
        desc: "Application Tonometer is an ophthalmologic instrument...",
        slug: "gat",
        initialThumbnail: gatThumb,
        images: [gat1, gat2, gat3],
        detailedDesc: "Application Tonometer is an ophthalmologic instrument used to determine pressure within the eye. Increased eye pressure often results in “Glaucoma” which is one of the major contributors to cases of preventable blindness.  Glaucoma is a group of eye conditions that can cause blindness. With all types of glaucoma, the nerve connecting the eye to the brain is damaged, usually due to high eye pressure. The most common type of glaucoma (open-angle glaucoma) often has no symptoms other than slow vision loss.",
        pleaseRead: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non at magni eum praesentium earum nesciunt, similique ducimus suscipit porro asperiores culpa quos reiciendis, repellendus est molestias explicabo soluta facilis expedita aliquid. Vitae consectetur ad repellendus quidem esse eius odio et?",
        pricing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, alias."
    },
    {
        title: "Gonioscopy",
        desc: "Gonioscopy is an ophthalmic procedure to view the anterior chamber angle structures.",
        slug: "gonioscopy",
        initialThumbnail: gThumb,
        images: [g1, g2, g3],
        detailedDesc: "Gonioscopy is an ophthalmic procedure to view the anterior chamber angle structures. This is also of immense value in detecting “Glaucoma” early. Glaucoma is a group of eye conditions that can cause blindness. With all types of glaucoma, the nerve connecting the eye to the brain is damaged, usually due to high eye pressure. The most common type of glaucoma (open-angle glaucoma) often has no symptoms other than slow vision loss.",
        pleaseRead: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non at magni eum praesentium earum nesciunt, similique ducimus suscipit porro asperiores culpa quos reiciendis, repellendus est molestias explicabo soluta facilis expedita aliquid. Vitae consectetur ad repellendus quidem esse eius odio et?",
        pricing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, alias."
    },
    {
        title: "Direct and Indirect Ophthalmoscopy",
        desc: "Ophthalmoscopy is the procedure to examine RETINA of an eye.",
        slug: "d&i-ophthalmoscopy",
        initialThumbnail: dioThumb,
        images: [dio1, dio2, dio3],
        detailedDesc: "Ophthalmoscopy is the procedure to examine RETINA of an eye. The retina is a layer of tissue in the back of your eye that senses light and sends images to your brain. In the center of this nerve tissue is the macula. It provides the sharp, central vision needed for reading, driving and seeing fine detail. Retinal disorders affect this vital tissue. Early detection is key in various conditions to maintain visual performance.",
        pleaseRead: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non at magni eum praesentium earum nesciunt, similique ducimus suscipit porro asperiores culpa quos reiciendis, repellendus est molestias explicabo soluta facilis expedita aliquid. Vitae consectetur ad repellendus quidem esse eius odio et?",
        pricing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, alias."
    },
    {
        title: "A-Scan Biometry",
        desc: "A Scan is a procedure to axial length, anterior chamber depth, lens thickness etc.",
        slug: "ascan",
        initialThumbnail: asThumb,
        images: [as3, as1, as2],
        detailedDesc: "A Scan is a procedure to axial length, anterior chamber depth, lens thickness etc. All these measured values are used to calculate intra ocular lens power. Before implantation the correct lens power needs to be determined. The process of measuring the various anatomical characteristics of the eye that are needed for IOL power calculation is called ocular biometry. Optical biometry, also known as ophthalmic biometry, using partial coherence interferometry has become the gold standard in ocular biometry as it is highly accurate, easy to perform, non-invasive and comfortable for the patient.",
        pleaseRead: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non at magni eum praesentium earum nesciunt, similique ducimus suscipit porro asperiores culpa quos reiciendis, repellendus est molestias explicabo soluta facilis expedita aliquid. Vitae consectetur ad repellendus quidem esse eius odio et?",
        pricing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, alias."
    },
    {
        title: "B-Scan Ultrasonography",
        desc: "B Scan uses ultrasound technology to evaluate interior of an eye and orbit. ",
        slug: "bscan",
        initialThumbnail: bsThumb,
        images: [bs1, bs2, bs3],
        detailedDesc: "B- Scan Ophthalmic ultrasonography is the main diagnostic imaging modality of the eye. It is a safe, noninvasive diagnostic tool that provides instant feedback for the evaluation of various ophthalmic disorders. Diagnostic ophthalmic ultrasonography is most useful in the presence of opaque ocular media caused by corneal opacities, anterior chamber opacities, cataracts, vitreous hemorrhage, or inflammatory opacities. Ophthalmic ultrasonography is also valuable in the presence of clear media and for evaluation of the iris, lens, ciliary body, and orbital structures.",
        pleaseRead: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non at magni eum praesentium earum nesciunt, similique ducimus suscipit porro asperiores culpa quos reiciendis, repellendus est molestias explicabo soluta facilis expedita aliquid. Vitae consectetur ad repellendus quidem esse eius odio et?",
        pricing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, alias."
    },
    {
        title: "Fundus Photography / FFA",
        desc: "Fundus Fluorescein Angiography is a technique for examining the circulation of the...",
        slug: "ffa",
        initialThumbnail: ffaThumb,
        images: [ffa1, ffa2, ffa3],
        detailedDesc: "Fundus fluorescein angiography is a technique for examining the circulation of the retina and choroid using a fluorescent dye and a specialized camera. It is very helpful in diagnosis and monitoring many eye conditions. Some of the common indications for this test include: Diabetic macular oedema, Identification of proliferative diabetic retinopathy, Retinal vein occlusions, Central serous retinopathy, Cystoid macular oedema secondary to intermediate uveitis, Retinal vasculitis, Age related macular degeneration, Polypoidal choroidal vasculopathy, Choroidal neovascular membranes secondary to Myopia/Trauma/inflammation.",
        pleaseRead: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non at magni eum praesentium earum nesciunt, similique ducimus suscipit porro asperiores culpa quos reiciendis, repellendus est molestias explicabo soluta facilis expedita aliquid. Vitae consectetur ad repellendus quidem esse eius odio et?",
        pricing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, alias."
    },
    {
        title: "3D Optical Coherence Tomography",
        desc: "Optical Coherence Tomography (OCT) is a non-invasive diagnostic...",
        slug: "d3o",
        initialThumbnail: d3Thumb,
        images: [d31, d32, d33],
        detailedDesc: "Optical Coherence Tomography (OCT) is a non-invasive diagnostic instrument used for imaging the retina.  The OCT uses an array of light to rapidly scan the eye. These scans are interpreted and the OCT then presents an image of the tissue layers within the retina. The anatomic features visible with OCT are much more detailed than that seen by normal examination. Seeing the retina from this cross sectional viewpoint provides a powerful way to detect, diagnose, and treat retinal and uveal diseases as well as glaucoma.",
        pleaseRead: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non at magni eum praesentium earum nesciunt, similique ducimus suscipit porro asperiores culpa quos reiciendis, repellendus est molestias explicabo soluta facilis expedita aliquid. Vitae consectetur ad repellendus quidem esse eius odio et?",
        pricing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, alias."
    },
]

//The functional component here
const Services = () => {
    return (
        <div className="services">
            {servicesData.map((ele, ind) => {
                return (
                    <div className="services__service-card">
                        <div className="services__service-card__initial-thumbnail">
                            <img src={ele.initialThumbnail} alt={ele.slug} />
                        </div>
                        <div className="services__service-card__title">{ele.title}</div>
                        <div className="services__service-card__desc">{ele.desc}</div>
                        <Link to={{
                            pathname: `${'services/'+ele.slug}`,
                            state: ele
                        }}>
                            <p className='services__service-card__cta'>See Details</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

//Default export services
export default Services