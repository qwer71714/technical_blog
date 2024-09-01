import { FooterRouter } from '@/app/Hook/ExtraRouter'
import FooterButton from '../Button/FooterButton'

export default function Footer() {
    const FooterLinkRouter = FooterRouter()
    return (
        <footer className='mt-24 bg-stone-200/50'>
            <div className='mx-auto w-2/3 py-4'>
                <div className='flex items-center gap-4'>
                    {FooterLinkRouter.map((LinkRouter) => (
                        <FooterButton
                            key={LinkRouter.label}
                            href={LinkRouter.href}
                            label={LinkRouter.label}
                        />
                    ))}
                </div>
            </div>
        </footer>
    )
}
