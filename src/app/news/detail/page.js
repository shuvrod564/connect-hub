import BlogAuthor from '@/components/childs/BlogAuthor' 
import Image from 'next/image'
import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'

export const metadata = {
    titl: "News Details"
}

const page = () => {
  return (
    <main className="news__detail">
      <div className="container py-8 sm:py-10 md:py-12">
        <Image
            src={"/images/banners/news-detail.png"} 
            width={1280} height={407}
            alt="New thumbnail"
            className="rounded-lg mb-5 sm:mb-7 md:mb-8"
        />
        <h1 className="text-dark h2 capitalize mb-3">architecture discovery with modrox</h1>

        <BlogAuthor
            thumbnail="/images/global/admin.png"
            date="Nov 1, 2023"
        />
        {/* space */}
        <div className="mb-4"></div>

        <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Noster expetenda suavitate visima asto, an nemore iracundia pro. At paulo salutandi sedos. Erum quilis inani virtute, adum has explicari evertitur signiferumque. Nec ne tibique molestie pertinax, agam maiorum ei his, has eruditi omittantur ea dicam ridens an.
            <br /><br />
            Vel minimum eloquentiam deterruisset ad, epicuri expetenda concludaturque nam et. Sed te affert voluptatibus, vis ut aliquando deterruisset, at his minimum adipiscing. Ea quis verear eam. Graeci conclusionemque per cu, conceptam adolescens ea mel, adipisci instructior no mei. Est an possim molestie iudicabit, nam an zril expetendis.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.  
        </p>

        <h2>Welcome to the new journey</h2>
        <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            <div>
                <Image src={"/images/global/blog-detail-1.png"} width={413} height={295} className="w-full h-auto rounded-lg" alt="image" />
            </div>
            <div>
                <Image src={"/images/global/blog-detail-1.png"} width={413} height={295} className="w-full h-auto rounded-lg" alt="image" />
            </div>
            <div>
                <Image src={"/images/global/blog-detail-1.png"} width={413} height={295} className="w-full h-auto rounded-lg" alt="image" />
            </div>
        </div>

        <br />
        <p>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
        </p>

        <h2>5 Actionable and Results-Oriented Tips</h2>
        <ul className="text-dark">
            <li className="flex mb-3">
                <FaCircleCheck className="w-5 text-xl text-primary relative top-0.5" />
                <span className="block w-[calc(100%-20px)] pl-2">A precise and deliberate choice of raw materials for the intrinsic beauty that these materials represent.</span>
            </li>
            <li className="flex mb-3">
                <FaCircleCheck className="w-5 text-xl text-primary relative top-0.5" />
                <span className="block w-[calc(100%-20px)] pl-2">Identify the Primary Goals.</span>
            </li>
            <li className="flex mb-3">
                <FaCircleCheck className="w-5 text-xl text-primary relative top-0.5" />
                <span className="block w-[calc(100%-20px)] pl-2">Possit theo phrastus.</span>
            </li>
            <li className="flex mb-3">
                <FaCircleCheck className="w-5 text-xl text-primary relative top-0.5" />
                <span className="block w-[calc(100%-20px)] pl-2">Run a Content Marketing Analysis</span>
            </li>
            <li className="flex mb-3">
                <FaCircleCheck className="w-5 text-xl text-primary relative top-0.5" />
                <span className="block w-[calc(100%-20px)] pl-2">Build a Content Strategy.</span>
            </li>
        </ul>
        <br />
        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            <div>
                <Image src={"/images/global/blog-detail-4.png"} width={630} height={411} className="w-full h-auto rounded-lg" alt="image" />
            </div>
            <div>
                <Image src={"/images/global/blog-detail-5.png"} width={630} height={411} className="w-full h-auto rounded-lg" alt="image" />
            </div> 
        </div>
        <br />
        <p>
            In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
        </p>

      
        
      </div>
      {/* container */}


    </main>
  )
}

export default page
