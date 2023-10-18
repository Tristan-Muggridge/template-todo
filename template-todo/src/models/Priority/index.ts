class PriorityManager {
    private static instance: PriorityManager;
    private priorities: Set<string> = new Set<string>(['low', 'medium', 'high']);

    private constructor() {}

    public static getInstance(): PriorityManager {
        if (!PriorityManager.instance) {
            PriorityManager.instance = new PriorityManager();
        }

        return PriorityManager.instance;
    }

    public getPriorities(): string[] {
        return Array.from(this.priorities);
    }

    public addPriority(priority: string): void {
        this.priorities.add(priority);
    }
}