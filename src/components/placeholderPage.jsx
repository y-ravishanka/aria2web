const PlaceholderPage = ({ title, description }) => {
    return (
        <div className="flex flex-col gap-6 p-6">
            <header className="flex items-center gap-2">
                <h1 className="text-lg font-semibold">{title}</h1>
            </header>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    );
};

export default PlaceholderPage;
