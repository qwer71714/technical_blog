import { useMemo } from "react"

export const NavigationMenu = () => {
    const router = useMemo(
        () => [
            {
                label: 'Skill',
                href: "/"
            },
            {
                label: 'Story',
                href: "/"
            },
            {
                label: 'Portfolio',
                href: "/"
            },
        ],
        []
    )
    return router
}