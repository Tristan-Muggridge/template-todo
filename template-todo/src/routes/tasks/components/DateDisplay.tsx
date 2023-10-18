export const DateDisplay = ({ date }: { date: Date; }) => {

    const labels = {
        Today: {
            label: "Today",
            colour: "text-emerald-300"
        },
        Yesterday: {
            label: "Yesterday",
            colour: "text-rose-400"
        },
        Tomorrow: {
            label: "Tomorrow",
            colour: "text-yellow-400"
        }
    };

    let dateString = date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
    });

    // check if date is today, yesterday or tomorrow
    const today = new Date();

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // if date is today, yesterday or tomorrow, display accordingly
    if (date.toDateString() === today.toDateString()) {
        dateString = "Today";
    } else if (date.toDateString() === yesterday.toDateString()) {
        dateString = "Yesterday";
    } else if (date.toDateString() === tomorrow.toDateString()) {
        dateString = "Tomorrow";
    }

    return (
        <span className={`text-xs ${labels[dateString as keyof typeof labels]?.colour || 'text-neutral-400'}`}>
            {labels[dateString as keyof typeof labels]?.label || dateString}
        </span>
    );
};
