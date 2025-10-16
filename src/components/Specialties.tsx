export const Specialties = () => {
    return (
        <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="border rounded-2xl p-4 bg-muted/20">
                <div className="text-xs text-muted-foreground">Key Skills</div>
                <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>Spring Backends</li>
                    <li>React + TS Frontends</li>
                    <li>Agile Workflow</li>
                    <li>CI/CD with GitLab & TeamCity</li>
                </ul>
            </div>
            <div className="border rounded-2xl p-4 bg-muted/20">
                <div className="text-xs text-muted-foreground">What I'm Learning</div>
                <ul className="mt-1 space-y-1 list-disc pl-4">
                    <li>Test Driven Development</li>
                    <li>Cross-Platform Tauri Apps</li>
                    <li>IoT & Embedded Systems</li>
                </ul>
            </div>
        </div>
    )
}