import createEvent from "@/app/actions/create-event";

const CreateEvent = ({}) => {
  return (
    <div className="mx-auto max-w-xl p-6">
      <h2 className="text-2xl font-semibold">Create new event</h2>

      <form action={createEvent} className="mt-6 space-y-6">
        <div>
          <label
            htmlFor="name-input"
            className="block text-sm font-medium text-muted-foreground"
          >
            Name of game
          </label>
          <input
            id="name-input"
            name="name"
            type="text"
            placeholder="Game night"
            className="mt-2 block w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div>
          <label
            htmlFor="description-input"
            className="block text-sm font-medium text-muted-foreground"
          >
            Description
          </label>
          <textarea
            id="description-input"
            name="description"
            placeholder="Describe your event"
            rows={4}
            className="mt-2 block w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Add event
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
