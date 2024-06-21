import "../SkillCarousel/style.css";

export default function Index() {
  return (
    <div className="flex space-x-12 overflow-hidden group items-center text-text01 ">
      <ul className="flex animate-infinite-scroll space-x-7 group-hover:paused items-center">
        <li>Autodidata</li>
        <li>Programador</li>
        <li>Curioso</li>
        <li>Estudante</li>
        <li>Fullstack</li>
        <li>Colaborativo</li>
        <li>Cristão</li>
        <li>Junior</li>
        <li>Sempre Aprendendo</li>
        <li>Criando</li>
        <li>Recriando</li>
        <li>Inconformado</li>
        <li>Ativo</li>
        <li>Sempre ON</li>
      </ul>
      <ul
        className="flex animate-infinite-scroll space-x-7 group-hover:paused items-center"
        aria-hidden="true"
      >
        <li>Autodidata</li>
        <li>Programador</li>
        <li>Curioso</li>
        <li>Estudante</li>
        <li>Fullstack</li>
        <li>Colaborativo</li>
        <li>Cristão</li>
        <li>Junior</li>
        <li>Sempre Aprendendo</li>
        <li>Criando</li>
        <li>Recriando</li>
        <li>Inconformado</li>
        <li>Ativo</li>
        <li>Sempre ON</li>
      </ul>
    </div>
  );
}
