import { FileText, LoaderCircle, MessageSquare, Send, Trash2, X } from "lucide-react";
import type { ChatMessage } from "./chat";

type ChatPanelProps = {
  messages: ChatMessage[];
  input: string;
  model: string;
  contextAttached: boolean;
  contextLength: number;
  rateStatus: string;
  busy: boolean;
  error: string;
  onInputChange: (value: string) => void;
  onSend: () => void;
  onClear: () => void;
  onAttachContext: () => void;
  onDetachContext: () => void;
};

export function ChatPanel({
  messages,
  input,
  model,
  contextAttached,
  contextLength,
  rateStatus,
  busy,
  error,
  onInputChange,
  onSend,
  onClear,
  onAttachContext,
  onDetachContext,
}: ChatPanelProps) {
  return (
    <section className="chat-workspace">
      <div className="chat-panel panel">
        <div className="panel-head">
          <div>
            <span className="panel-kicker">LOKALE CHAT</span>
            <span className="panel-title">
              <MessageSquare size={15} /> Vraag het lokale model
            </span>
          </div>
          <span className="chat-model-label">{model}</span>
        </div>
        <div className="chat-message-list" aria-live="polite">
          {!messages.length && (
            <div className="chat-empty">
              <MessageSquare size={23} />
              <p>Stel een vraag aan het lokale Ollama-model.</p>
              <span>De oorspronkelijke bronlaag wordt nooit automatisch meegestuurd.</span>
            </div>
          )}
          {messages.map((message, index) => (
            <article className={`chat-message ${message.role}`} key={`${message.role}-${index}`}>
              <span className="chat-role">{message.role === "user" ? "JIJ" : "LOKAAL MODEL"}</span>
              <p>{message.content}</p>
            </article>
          ))}
          {busy && (
            <div className="chat-generating">
              <LoaderCircle size={15} className="spin" /> Antwoord wordt lokaal gegenereerd...
            </div>
          )}
        </div>
        {contextAttached && (
          <div className="chat-context-chip">
            <FileText size={14} /> Synthetische output als context · {contextLength} tekens
            <button
              type="button"
              className="icon-button"
              onClick={onDetachContext}
              aria-label="Verwijder synthetische context"
              title="Verwijder synthetische context"
            >
              <X size={14} />
            </button>
          </div>
        )}
        <div className="chat-input-area">
          <textarea
            aria-label="Chatvraag"
            value={input}
            onChange={(event) => onInputChange(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                onSend();
              }
            }}
            placeholder="Stel een vraag..."
            disabled={busy}
            rows={3}
          />
          <div className="chat-actions">
            <div className="chat-action-left">
              <button
                type="button"
                className={`icon-button ${contextAttached ? "active" : ""}`}
                onClick={onAttachContext}
                disabled={busy || contextAttached}
                aria-label="Gebruik synthetische output als context"
                title="Gebruik synthetische output als context"
              >
                <FileText size={16} />
              </button>
              <span className="chat-rate-status">{rateStatus}</span>
            </div>
            <div className="chat-action-right">
              <button
                type="button"
                className="icon-button"
                onClick={onClear}
                disabled={busy || !messages.length}
                aria-label="Wis chat"
                title="Wis chat"
              >
                <Trash2 size={16} />
              </button>
              <button
                type="button"
                className="copy-button chat-send"
                onClick={onSend}
                disabled={busy || !input.trim()}
              >
                <Send size={15} /> Verstuur
              </button>
            </div>
          </div>
          {error && <p className="chat-error">{error}</p>}
        </div>
      </div>
    </section>
  );
}
