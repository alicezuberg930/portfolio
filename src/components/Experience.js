import { EXPERIENCES } from "assets/data"
import { motion } from "framer-motion"

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Kinh nghiệm</h2>
            <div>
                {
                    EXPERIENCES.map(item => {
                        return (
                            <div key={item.company} className="mb-10 flex flex-wrap lg:justify-center">
                                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="w-full lg:w-1/4">
                                    <p className="mb-2 text-sm text-neutral-400">{item.year}</p>
                                </motion.div>
                                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} className="w-full max-w-xl lg:w-3/4">
                                    <div className="w-full max-w-xl lg:w-3/4">
                                        <h6 className="mb-2 font-normal">{item.role} - <span className="font-bold text-purple-100">{item.company}</span></h6>
                                        <p className="mb-4 text-neutral-400">{item.description}</p>
                                        <div className="flex flex-wrap">
                                            {
                                                item.technologies.map(technology => {
                                                    return (
                                                        <span key={technology} className="mr-2 mt-2 rounded bg-neutral-700 px-2 py-1 text-sm font-medium text-purple-400">
                                                            {technology}
                                                        </span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Experience