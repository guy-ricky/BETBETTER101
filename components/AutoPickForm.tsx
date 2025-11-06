/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

const AutoPickForm = ({ type = 'free' }: { type?: 'free' | 'vip' }) => {
    const [form, setForm] = useState({
        home_team: '',
        away_team: '',
        home_attack: '',
        home_defense: '',
        away_attack: '',
        away_defense: '',
    });

    const [loading, setLoading] = useState(false);
    const [generatedPick, setGeneratedPick] = useState<any>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const generatePrediction = async () => {
        setLoading(true);

        try {
            const res = await fetch(`${process.env.POISSON_API_BASE}/predict`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...form,
                    home_attack: parseFloat(form.home_attack),
                    home_defense: parseFloat(form.home_defense),
                    away_attack: parseFloat(form.away_attack),
                    away_defense: parseFloat(form.away_defense),
                })
            });

            const data = await res.json();

            const payload: any = {
                match: `${form.home_team} vs ${form.away_team}`,
                prediction: data.prediction.top_3_scorelines[0].score,
                odds: (Math.max(
                    data.prediction.home_win_prob,
                    data.prediction.away_win_prob,
                    data.prediction.draw_prob
                ) / 100).toFixed(2),
                homeTeam: form.home_team,
                awayTeam: form.away_team,
                homeWinProb: data.prediction.home_win_prob,
                drawProb: data.prediction.draw_prob,
                awayWinProb: data.prediction.away_win_prob,
                scoreline1: data.prediction.top_3_scorelines[0].score,
                scoreline2: data.prediction.top_3_scorelines[1].score,
                scoreline3: data.prediction.top_3_scorelines[2].score,
                date: new Date().toISOString(),
            };

            const response = await fetch(`/api/admin/${type}-picks`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error('Failed to save pick.');

            toast.success(`${type === 'free' ? 'Free' : 'VIP'} pick created successfully!`);
            setForm({
                home_team: '',
                away_team: '',
                home_attack: '',
                home_defense: '',
                away_attack: '',
                away_defense: '',
            });
            setGeneratedPick(payload);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
                toast.error(error.message || "An error occurred");
            } else {
                toast.error("An unknown error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-800 p-6 rounded-lg border border-brb-green shadow-lg space-y-4 max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-2xl font-bold text-brb-gold mb-4 text-center">Auto-Generate {type === 'vip' ? 'VIP' : 'Free'} Pick</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['home_team', 'away_team', 'home_attack', 'home_defense', 'away_attack', 'away_defense'].map((field) => (
                    <div key={field}>
                        <label className="text-sm text-gray-300 capitalize block mb-1">{field.replace('_', ' ')}</label>
                        <input
                            type={field.includes('attack') || field.includes('defense') ? 'number' : 'text'}
                            name={field}
                            value={(form as any)[field]}
                            onChange={handleChange}
                            className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brb-green"
                            required
                        />
                    </div>
                ))}
            </div>
            <button
                onClick={generatePrediction}
                disabled={loading}
                className="bg-brb-green text-black px-6 py-3 rounded font-semibold w-full mt-6 transition duration-200 hover:bg-brb-green/90 disabled:opacity-50"
            >
                {loading ? 'Generating...' : 'Generate Pick'}
            </button>

            {generatedPick && (
                <div className="mt-8 p-4 bg-gray-900 border border-brb-green rounded-lg">
                    <h3 className="text-lg font-semibold text-brb-gold mb-2">Latest Pick:</h3>
                    <p className="text-white">Match: {generatedPick.match}</p>
                    <p className="text-green-400">Prediction: {generatedPick.prediction}</p>
                    <p className="text-yellow-400">Odds: {generatedPick.odds}</p>
                </div>
            )}
        </div>
    );
};

export default AutoPickForm;
