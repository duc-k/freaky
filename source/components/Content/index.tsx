import Container from "@/components/Content/styled";
import api from "@/utilities/baseURL";
import { useEffect, useState } from "react";

interface Rep {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
}

export default function Content() {
  const [repositories, setRepositories] = useState<Rep[]>([]);

  async function getRepositories() {
    try {
      const response = await api.get("/duc-k/repos");
      setRepositories(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getRepositories();
  }, []);

  return (
    <Container>
      <ul className="repositories">
        {repositories.map((repository) => (
          <li key={repository.id}>
            <a
              href={repository.html_url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="repositories__info">
                <strong>{repository.name}</strong>
                <p>{repository.description}</p>
              </div>

              <ul className="repositories__topics">
                {repository.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
}
