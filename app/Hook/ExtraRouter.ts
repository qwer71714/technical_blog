import { Children, useMemo } from "react"

export const ExtraRouter = () => {
    const router = useMemo(
        () => [
            {
                label: '전체보기',
                onclick: () => console.log("전체보기")
            }
        ],
        []
    )
    return router
}

export const FooterRouter = () => {
    const pooterrouter = useMemo(
        () => [
            {
                label: "나의 소개",
                href: "#"
            },
            {
                label: "나의 포트폴리오",
                href: "#"
            },
            {
                label: "문의 : qwer71714@naver.com",
                href: "#"
            },
        ],
        []
    )

    return pooterrouter
}