import AdotanteEntity from "../../entitys/AdotanteEntitys";
import EnderecoEntity from "../../entitys/EnderecoEntitys";


export default interface InterfaceAdotanteRepository {
criaAdotante(adotante: AdotanteEntity): void | Promise<void>;

listaAdotantes(): AdotanteEntity[] | Promise<AdotanteEntity[]>;

atualizaAdotante(
id: number,
adotante: AdotanteEntity
): Promise<{ success: boolean; message?: string }> | void;

deletaAdotante(
id: number
): Promise<{ success: boolean; message?: string }> | void;

atualizaEnderecoAdotante(
  idAdotante: number,
  endereco: EnderecoEntity
): Promise<{ success: boolean; message?: string }> | void;

}

