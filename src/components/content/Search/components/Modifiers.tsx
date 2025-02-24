import { useSearchContext } from "../context";

export const Modifiers = () => {
  const { setChaos, setFlakiness, setDelay } = useSearchContext();

  return (
    <>
      <div>
        <label htmlFor="chaos">Chaos</label>
        <input
          type="checkbox"
          id="chaos"
          onChange={(e) => setChaos(e.target.checked)}
        />
      </div>

      <div>
        <label htmlFor="flakiness">Flakiness</label>
        <input
          type="number"
          id="flakiness"
          onChange={(e) => setFlakiness(Number(e.target.value))}
        />
      </div>

      <div>
        <label htmlFor="delay">Delay</label>
        <input
          type="number"
          id="delay"
          onChange={(e) => setDelay(Number(e.target.value))}
        />
      </div>
    </>
  );
};
