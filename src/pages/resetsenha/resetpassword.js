import React, { useState } from 'react';
import api from '../../services/api';

export default function ResetPassword() {
    const [email, setEmail] = useState('');

    async function handleReset(e) {
        e.preventDefault();

        await api.post('/resert-passwordclient', { email });

    }

    return (
        <div>
            <form onSubmit={handleReset}>
                <label htmlFor="email">email
                    <input
                        placeholder="Insira seu E-mail"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        required
                    />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}